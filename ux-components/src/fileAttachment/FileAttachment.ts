/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardView, QuickViewNavigator } from "@microsoft/sp-adaptive-card-extension-base";
import {
  ActionSubmit,
  ActionSet,
  ActionSelectMedia,
  BaseElement,
  Column,
  ColumnSet,
  Container,
  Image,
  FontWeight,
  TextBlock,
  ActionStyle,
} from "../elements";
import { Alignment, ContainerStyle, FontColor, Spacing } from "../elements/Schema.types";
import { Annotation, AnnotationSimple, FileAttachmentProps, MediaType } from "../types";
import { FileView } from "./FileView";
import { IBaseComponent } from "../baseComponent/IBaseComponent";
import { Vector, ImageIcon, DismissIcon, FileIcon } from "../assets";

export class FileAttachment<TProps, TState> extends Container implements IBaseComponent {
  public readonly actionId: string;
  private filesListLength: number;

  /**
   *  File attachment component. By default, allows upload of pdfs or images with 2 buttons and management of uploaded file(s).
   *  NOTE: actions must be handled on the view level, please review the documentation for more detailed information.
   * @param props
   * @param quickViewNavigator Quick view navigator of the view
   */
  constructor(
    props: FileAttachmentProps,
    quickViewNavigator: QuickViewNavigator<BaseAdaptiveCardView<TProps, TState, {}>>
  ) {
    super([]);
    this.items = this.getFiles(props.filesList, props.maxSize, props.isFileTooLarge, props.maxSizeExceededMessage);
    this.filesListLength = props.filesList.length;

    quickViewNavigator.register(props.id, () => new FileView<TProps, TState>(props.selectedFileStateKey));
    this.actionId = props.id;
  }

  private getFiles(
    filesList: (AnnotationSimple | Annotation)[],
    maxSize: number,
    isFileTooLarge: boolean,
    maxSizeExceededMessage: string
  ): BaseElement[] {
    const attachmentListContainer: ColumnSet[] =
      filesList.length > 0
        ? filesList.map(
            (item, index) =>
              new ColumnSet([
                new Column([
                  new ColumnSet([
                    new Column([
                      this.getImage(
                        // Checks if the uploaded file is a PDF
                        item.filename.slice(item.filename.length - 4, item.filename.length) === ".pdf"
                          ? FileIcon
                          : (item as AnnotationSimple).base64Uri
                          ? (item as AnnotationSimple).base64Uri
                          : (item as Annotation).mimetype
                          ? (item as Annotation).mimetype
                          : ImageIcon,
                        "32px",
                        "32px"
                      ).setWidth("30px"),
                    ]).setWidth("auto"),
                    new Column([
                      new TextBlock(item.filename)
                        .setColor(
                          item.filename.slice(item.filename.length - 4, item.filename.length) === ".pdf"
                            ? FontColor.Default
                            : FontColor.Accent
                        )
                        .setWeight(FontWeight.Bolder),
                    ]).setWidth("auto"),
                  ]).setAction(
                    item.filename.slice(item.filename.length - 4, item.filename.length) === ".pdf"
                      ? null
                      : new ActionSubmit(`action.preview_${index}`, `Open preview of ${item.filename}`, {
                          additionalData: { index },
                        })
                  ),
                ]),
                new Column([this.getImage(DismissIcon, "12", "12", "Delete")])
                  .shrink()
                  .setAction(
                    new ActionSubmit(
                      `action.close.attachment_${index}`,
                      `Item ${index + 1} of ${filesList.length}, ${item.filename} , Delete`,
                      { additionalData: { index } }
                    )
                  ),
              ])
          )
        : ([new ColumnSet([]).setIsVisible(false)] as ColumnSet[]);

    return [
      new Container([
        new ColumnSet([
          new Column([this.getImage(Vector, "20px", "20px", "Vector")]).shrink() as Column,
          new Column([new TextBlock(maxSizeExceededMessage).setWeight(FontWeight.Bolder)]).stretch() as Column,
        ]).setIsVisible(isFileTooLarge),
        new ColumnSet([
          new Column([
            new ActionSet([
              new ActionSelectMedia("action.upload_images", "Upload Image", {
                allowMultipleCapture: true,
                maxSizePerFile: maxSize,
                mediaType: MediaType.Image,
              }).setStyle(ActionStyle.Default),
            ])
              .useSeparator()
              .setSpacing(Spacing.Padding),
          ]),
          new Column([
            new ActionSet([
              new ActionSelectMedia("action.upload_pdf", "Upload PDF", {
                allowMultipleCapture: true,
                maxSizePerFile: maxSize,
                mediaType: MediaType.Document,
              }).setStyle(ActionStyle.Default),
            ])
              .useSeparator()
              .setSpacing(Spacing.Padding),
          ]),
        ]),
        new ColumnSet([new Column([...attachmentListContainer])]),
      ]),
    ];
  }

  private getImage(url: string, height: string, width: string, altText: string = ""): Image {
    return new Image(url, altText).setHorizontalAlignment(Alignment.Center).setHeight(height).setWidth(width);
  }

  public action(quickViewNavigator: QuickViewNavigator<BaseAdaptiveCardView<{}, {}, {}>>): void {
    quickViewNavigator.push(this.actionId);
  }

  public updateProps(props: FileAttachmentProps): void {
    this.updateItems(this.getFiles(props.filesList, props.maxSize, props.isFileTooLarge, props.maxSizeExceededMessage));
  }

  /**
   * Disables the button to allow uploading PDFs.
   * @returns Itself.
   */
  public useOnlyImageUpload(): BaseElement {
    ((this.items[0] as Container).items[1] as ColumnSet).columns[1].setIsVisible(false);
    return this;
  }

  /**
   * Disables the button to allow uploading images.
   * @returns Itself.
   */
  public useOnlyFileUpload(): BaseElement {
    ((this.items[0] as Container).items[1] as ColumnSet).columns[0].setIsVisible(false);
    return this;
  }

  /**
   *  Sets it to preview the list of files only, disabling the upload button(s) & ability to delete items.
   *  Displays nothing if filesList is not populated.
   * @returns Itself.
   */
  public previewOnly(): BaseElement {
    // Disables upload buttons
    ((this.items[0] as Container).items[1] as ColumnSet).columns[0].setIsVisible(false);
    ((this.items[0] as Container).items[1] as ColumnSet).columns[1].setIsVisible(false);

    if (this.filesListLength > 0) {
      // Sets the container style to emphasis for displaying list of files & sets isVisible for delete button to false.
      for (let index = 0; index < this.filesListLength; index++) {
        // (
        //   (((this.items[0] as Container).items[2] as ColumnSet).columns[0].items[0] as ColumnSet).columns[0]
        //     .items[0] as ColumnSet
        // ).setStyle(ContainerStyle.Emphasis);
        ((this.items[0] as Container).items[2] as ColumnSet).setStyle(ContainerStyle.Emphasis);
        (
          ((this.items[0] as Container).items[2] as ColumnSet).columns[0].items[index] as ColumnSet
        ).columns[1].setIsVisible(false);
      }
    }

    return this;
  }
}
