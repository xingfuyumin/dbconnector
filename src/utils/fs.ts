const fs = require('fs');

/**
 * 
 * @param path 文件路径
 * @param createFile 文件不存在时是否
 */
export const readFile = async (path: string) => {
  return await new Promise((resolved, rejected) => {
    fs.readFile(path, )
  });
}