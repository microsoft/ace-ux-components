/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Annotation, AnnotationSimple, HostTheme } from "../types";
import { FileView } from "./FileView";
import { AvatarBlue_light } from "src/assets";

jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardQuickView: {
    apply: jest.fn(),
    call: jest.fn(),
    prototype: {
      quickViewNavigator: {
        pop: jest.fn(),
      },
    },
  },
}));

jest.mock("../fileAttachment/FileView", () => ({
  FileView: () => ({
    data: { selectedFile: { filename: "test.pdf", base64Uri: "test", mimetype: "test" } },
    template: {},
  }),
}));

const testHostTheme: HostTheme = "light";

describe("Image View with AnnotationSimple Type", () => {
  let fileView: FileView<{}, { selectedImageStateKey: string }>;
  beforeEach(() => {
    fileView = new FileView("selectedFile", testHostTheme);
    // @ts-ignore
    fileView["state"] = {
      selectedFile: { fileName: "testImage.png", base64Uri: AvatarBlue_light },
    };
  });

  it("Should load preview properly", () => {
    const data = fileView.data;
    expect((data.selectedFile as AnnotationSimple).base64Uri).toBeDefined();
    expect(data).toBeDefined();
  });
});

describe("Image View with Annotation Image Type", () => {
  let fileView: FileView<{}, { selectedFileStateKey: string }>;
  beforeEach(() => {
    fileView = new FileView("selectedFile", testHostTheme);
    // @ts-ignore
    fileView["state"] = {
      selectedFile: { filename: "test2.png", mimetype: AvatarBlue_light, subject: "", notetext: "", annotationid: "" },
    };
  });

  it("Should load preview properly", () => {
    const data = fileView.data;
    expect((data.selectedFile as Annotation).mimetype).toBeDefined();
    expect(data).toBeDefined();
    expect(fileView.template).toBeDefined();
  });

  it("Should not get template properly", () => {
    const template = fileView.template;
    expect(template.body).toBeUndefined();
  });
});

describe("Image View without defined selectedImage key", () => {
  let fileView: FileView<{}, { selectedFileStateKey: string }>;
  beforeEach(() => {
    fileView = new FileView("", testHostTheme);
    // @ts-ignore
    fileView["state"] = {
      selectedFile: { fileName: "testImage", base64Uri: null },
    };
  });

  it("Should get the template", () => {
    const data = fileView.data;
    expect(data.selectedFile).toBeDefined();
  });
});
