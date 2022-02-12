import formidable from "formidable";
import fs from "fs";
import { v4 } from "uuid";

const baseStoragePath = `${__dirname}/${process.env.STORAGE_FOLDER}/`;

export const uploadFiles = (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json(err);
    } else {
      const newFileName = v4();
      fs.rename(
        files.filetoupload.filepath,
        `${baseStoragePath}${newFileName}`,
        (err) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json({file: newFileName});
          }
        }
      )
    }
  });
};

export const downloadFiles = (req, res) => {
  const { filename } = req.params;

  res.download(`${baseStoragePath}${filename}`, (error) => {
    if(error) {
      res.status(error.status).json({
        message: "download was unsuccessful",
      })
    }
  })
};
