export const waitForTextChange = (el: any, text: any, timeout: any) => {
    browser.waitUntil(
      function () {
        return el.getText() === text;
      },
      { timeout }
    );
  };
  