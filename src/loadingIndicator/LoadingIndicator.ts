/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LoadingSpinner } from "../assets";
import { Alignment, Container, FontSize, Image, TextBlock } from "../elements";
import { LoadingSize, LOADING_ID } from "../types";

export class LoadingIndicator extends Container {
  private sizes: { imageSize: string; fontSize: FontSize };

  constructor(size: LoadingSize, focusID: string = LOADING_ID) {
    super([]);

    this.generateItems(size, focusID);
  }

  private generateItems(size: LoadingSize, focusID: string): void {
    this.sizes = this.getComponentSize(size);
    this.items = [this.getImage(this.sizes.imageSize).setID(focusID)];
  }

  private getComponentSize(size: LoadingSize): { imageSize: string; fontSize: FontSize } {
    switch (size) {
      case LoadingSize.Medium:
        return { imageSize: "32px", fontSize: FontSize.Default };
      case LoadingSize.Large:
        return { imageSize: "44px", fontSize: FontSize.Large };
      default:
        return { imageSize: "32px", fontSize: FontSize.Default };
    }
  }

  private getImage(imageSize: string): Image {
    return new Image(LoadingSpinner, "Loading indicator")
      .setHorizontalAlignment(Alignment.Center)
      .setHeight(imageSize)
      .setWidth(imageSize);
  }

  public withLabel(label: string): LoadingIndicator {
    if (this.items.length > 1) {
      return this;
    }

    this.items.push(new TextBlock(label).setHorizontalAlignment(Alignment.Center).setSize(this.sizes.fontSize));

    return this;
  }
}
