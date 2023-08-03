/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/*
import { BaseAdaptiveCardQuickView, ISPFxAdaptiveCard } from "@microsoft/sp-adaptive-card-extension-base";
import { Column, ColumnSet, Container, TextBlock } from "../elements";
import { Annotation, AnnotationSimple, FileAttachmentProps } from "../types";
import { FileAttachment } from "./FileAttachment";

jest.mock("@microsoft/sp-adaptive-card-extension-base", () => ({
  BaseAdaptiveCardQuickView: () => ({
    apply: jest.fn(),
    call: jest.fn(),
    prototype: {
      quickViewNavigator: {
        push: jest.fn(),
        register: jest.fn(),
      },
    },
  }),
  QuickViewNavigator: () => ({
    push: jest.fn(),
    register: jest.fn(),
  }),
  BaseQuickView: () => ({
    apply: jest.fn(),
    call: jest.fn(),
    prototype: {
      quickViewNavigator: {
        push: jest.fn(),
        register: jest.fn(),
      },
      setState: jest.fn(),
    },
  }),
}));

// jest.mock("../fileAttachment/FileAttachment", () => ({
//   FileAttachment: () => ({}),
// }));

class StubQV extends BaseAdaptiveCardQuickView {
  public get template(): ISPFxAdaptiveCard {
    return {};
  }
}
const qv = new StubQV();

const props: FileAttachmentProps = {
  id: "testId",
  filesList: [],
  maxSize: 1,
  isFileTooLarge: false,
  selectedFileStateKey: "selectedFile",
  maxSizeExceededMessage: "File too large",
};

describe("FileAttachment component", () => {
  let fileAttachment: FileAttachment<{}, {}>;
  beforeEach(() => {
    fileAttachment = new FileAttachment(props, qv.quickViewNavigator as any);
  });

  it("Should trigger the fileAttachment action", () => {
    fileAttachment.action(qv.quickViewNavigator as any);
    expect(qv.quickViewNavigator.push).toHaveBeenCalledWith("testId");
  });

  it("Should update image filename", () => {
    const testImageList: AnnotationSimple[] = [{ filename: "test.png", base64Uri: "test" }];
    props.filesList = testImageList;
    fileAttachment.updateProps(props);
    expect(
      (
        (
          (
            (((fileAttachment.items[0] as Container).items[2] as ColumnSet).columns as Column[])[0]
              .items[0] as ColumnSet
          ).columns[0].items[0] as ColumnSet
        ).columns[1].items[0] as TextBlock
      ).text
    ).toEqual(testImageList[0].filename);
  });

  it("Should show image with different image type", () => {
    const testImageList: Annotation[] = [
      { filename: "test2.png", mimetype: "test", subject: "", notetext: "", annotationid: "" },
    ];
    props.filesList = testImageList;
    fileAttachment.updateProps(props);
    expect(
      (
        (
          (
            (((fileAttachment.items[0] as Container).items[2] as ColumnSet).columns as Column[])[0]
              .items[0] as ColumnSet
          ).columns[0].items[0] as ColumnSet
        ).columns[1].items[0] as TextBlock
      ).text
    ).toEqual(testImageList[0].filename);
  });

  it("Should show error message when file is too large", () => {
    props.isFileTooLarge = true;
    fileAttachment.updateProps(props);
    expect(
      (((fileAttachment.items[0] as Container).items[0] as ColumnSet).columns[1].items[0] as TextBlock).text
    ).toEqual("File too large");
  });

  it("Should upload pdf file type", () => {
    const testImageList: AnnotationSimple[] = [{ filename: "receiptInvoice.pdf", base64Uri: "test" }];

    props.filesList = testImageList;
    fileAttachment.updateProps(props);

    expect(
      (
        (
          (
            (((fileAttachment.items[0] as Container).items[2] as ColumnSet).columns as Column[])[0]
              .items[0] as ColumnSet
          ).columns[0].items[0] as ColumnSet
        ).columns[1].items[0] as TextBlock
      ).text
    ).toEqual(testImageList[0].filename);
  });
});

describe("FileAttachment component", () => {
  const props: FileAttachmentProps = {
    id: "testId",
    filesList: [{ filename: "test.png", base64Uri: "test" }],
    maxSize: 1,
    isFileTooLarge: false,
    selectedFileStateKey: "selectedFile",
    maxSizeExceededMessage: "File too large",
  };

  it("Should set upload image button to be not visible", () => {
    const fileAttachment = new FileAttachment(props, qv.quickViewNavigator as any).useOnlyFileUpload();

    expect((((fileAttachment as Container).items[0] as Container).items[1] as ColumnSet).columns[0].isVisible).toEqual(
      false
    );
  });

  it("Should set upload file button to be not visible", () => {
    const fileAttachment = new FileAttachment(props, qv.quickViewNavigator as any).useOnlyImageUpload();

    expect((((fileAttachment as Container).items[0] as Container).items[1] as ColumnSet).columns[1].isVisible).toEqual(
      false
    );
  });

  it("Should load as preview only", () => {
    const fileAttachment = new FileAttachment(props, qv.quickViewNavigator as any).previewOnly();

    // Check if upload buttons are set to not visible
    expect(((fileAttachment as Container).items[0] as Container).items[0].isVisible).toEqual(false);
  });
});*/
