export const utility = {
  /*******************************
  function getDoc(page): 
  目的 : 抓出文件的高度，寬度。用來設定照相的高，寬。
  *******************************/
  getDoc: async function(page) {
    const doc = await page.evaluate(() => {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      };
    });
    return doc;
  },
  /*******************************
  function capture(page)
  目的 : 照相  
  *******************************/
  capture: async function(page) {
    const doc = await this.getDoc(page);
    await page.setViewport({ width: doc.width, height: doc.height });
    const img = await page.screenshot({
      clip: { x: 0, y: 0, width: doc.width, height: doc.height }
    });
    return img;
  }
};
