/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseAdaptiveCardQuickView, ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { createTemplate } from "../createTemplate";
import { Alignment, Container, FontWeight, Image, TextBlock } from "../elements";
import { Annotation, AnnotationSimple, HostTheme, IconName } from "../types";
import { Header, HeaderType } from "../header/Header";
import { getIcon } from "../getIcon";

type FileViewData = {
  selectedFile: any;
};

export class FileView<TProps, TState> extends BaseAdaptiveCardQuickView<TProps, TState, FileViewData> {
  private selectedFileStateKey: string;
  private altText: string = "";
  private hostTheme: HostTheme;
  constructor(selectedFileStateKey: string, hostTheme: HostTheme) {
    super();
    this.hostTheme = hostTheme;
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
        (this.data.selectedFile as AnnotationSimple)?.base64Uri
          ? new Image((this.data.selectedFile as AnnotationSimple)?.base64Uri, this.altText)
          : (this.data.selectedFile as Annotation)?.mimetype
          ? new Image((this.data.selectedFile as Annotation)?.mimetype, this.altText)
          : getIcon({ icon: IconName.Image, altText: this.altText, hostTheme: this.hostTheme }),
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
