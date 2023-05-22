/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardView, ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { createTemplate } from "../createTemplate";
import { Alignment, Container, FontWeight, Image, TextBlock } from "../elements";
import { Annotation, AnnotationSimple } from "../types";
import { ImageIcon } from "../assets";
import { Header, HeaderType } from "../header/Header";

type FileViewData = {
  selectedFile: any;
};

export class FileView<TProps, TState> extends BaseAdaptiveCardView<TProps, TState, FileViewData> {
  private selectedFileStateKey: string;
  private altText: string = "";
  constructor(selectedFileStateKey: string) {
    super();

    this.selectedFileStateKey = selectedFileStateKey;
  }

  public get data(): FileViewData {
    return {
      selectedFile: this.state[this.selectedFileStateKey],
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return createTemplate([
      new Header(HeaderType.Basic, "View File"),
      new Container([
        new Image(
          (this.data.selectedFile as AnnotationSimple)?.base64Uri
            ? (this.data.selectedFile as AnnotationSimple)?.base64Uri
            : (this.data.selectedFile as Annotation)?.mimetype
            ? (this.data.selectedFile as Annotation)?.mimetype
            : ImageIcon,
          this.altText
        ),
        new TextBlock(
          (this.data.selectedFile as AnnotationSimple)?.filename
            ? (this.data.selectedFile as AnnotationSimple)?.filename
            : (this.data.selectedFile as Annotation)?.filename
            ? (this.data.selectedFile as AnnotationSimple)?.filename
            : ""
        )
          .setHorizontalAlignment(Alignment.Center)
          .setWeight(FontWeight.Bolder),
      ]),
    ]);
  }
}
