/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Alignment, Container, FontSize, Image, TextBlock } from "../elements";
import { HostTheme, LoadingSize, LOADING_ID, IconProps, IconName } from "../types";
import { getIcon } from "../getIcon";

export class LoadingIndicator extends Container {
  private sizes: { imageSize: string; fontSize: FontSize };
  private hostTheme: HostTheme;

  constructor(size: LoadingSize, hostTheme: HostTheme, focusID: string = LOADING_ID) {
    super([]);
    this.hostTheme = hostTheme;
    this.generateItems(size, focusID);
  }

  private generateItems(size: LoadingSize, focusID: string): void {
    this.sizes = this.getComponentSize(size);
    this.items = [this.getImage(this.sizes.imageSize, focusID)];
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

  private getImage(imageSize: string, focusID: string): Image {
    const iconProps: IconProps = {
      icon: IconName.LoadingIcon,
      hostTheme: this.hostTheme,
      altText: "Loading indicator",
      height: imageSize,
      width: imageSize,
    };

    return getIcon(iconProps).setHorizontalAlignment(Alignment.Center);
  }

  public withLabel(label: string): LoadingIndicator {
    if (this.items.length > 1) {
      return this;
    }

    this.items.push(new TextBlock(label).setHorizontalAlignment(Alignment.Center).setSize(this.sizes.fontSize));

    return this;
  }
}
