/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AvatarBlue } from "../assets";
import { TextBlock } from "../elements";
import { Annotation, AnnotationSimple } from "../types";
import { FileView } from "./FileView";

jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardView: {
    apply: jest.fn(),
    call: jest.fn(),
    prototype: {
      quickViewNavigator: {
        pop: jest.fn(),
      },
    },
  },
}));

describe("Image View with AnnotationSimple Type", () => {
  let fileView: FileView<{}, { selectedImageStateKey: string }>;
  beforeEach(() => {
    fileView = new FileView("selectedFile");
    // @ts-ignore
    fileView["state"] = {
      selectedFile: { fileName: "testImage.png", base64Uri: AvatarBlue },
    };
  });

  it("Should load preview properly", () => {
    const data = fileView.data;
    expect((data.selectedFile as AnnotationSimple).base64Uri).toBeDefined();
    expect(data).toBeDefined();
    expect(fileView.template.body[1].items[0]).toBeDefined();
    expect(fileView.template.body[1].items[1]).toBeDefined();
  });
});

describe("Image View with Annotation Image Type", () => {
  let fileView: FileView<{}, { selectedFileStateKey: string }>;
  beforeEach(() => {
    fileView = new FileView("selectedFile");
    // @ts-ignore
    fileView["state"] = {
      selectedFile: { filename: "test2.png", mimetype: AvatarBlue, subject: "", notetext: "", annotationid: "" },
    };
  });

  it("Should load preview properly", () => {
    const data = fileView.data;
    expect((data.selectedFile as Annotation).mimetype).toBeDefined();
    expect(data).toBeDefined();
    expect(fileView.template.body[1].items[0]).toBeDefined();
    expect(fileView.template.body[1].items[1]).toBeDefined();
  });

  it("Should get template properly", () => {
    const template = fileView.template;
    expect(template.body).toHaveLength(2);
  });
});

describe("Image View without defined selectedImage key", () => {
  let fileView: FileView<{}, { selectedFileStateKey: string }>;
  beforeEach(() => {
    fileView = new FileView("");
    // @ts-ignore
    fileView["state"] = {
      selectedFile: { fileName: "testImage", base64Uri: null },
    };
  });

  it("Should set selectedImage to be undefined if key isn't defined", () => {
    const data = fileView.data;
    expect(data.selectedFile).toBeUndefined();
  });
});
