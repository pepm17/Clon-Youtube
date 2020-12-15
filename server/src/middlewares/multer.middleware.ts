import multer, { diskStorage, DiskStorageOptions, Multer } from "multer";
import { resolve } from "path";

export class MulterMiddleware {
  private storageOptions: DiskStorageOptions;
  private upload: Multer;
  constructor() {
    this.storageOptions = {
      destination: (req, file, cb) => {
        cb(null, resolve("src/uploads"));
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
      },
    };
    this.upload = multer({
      storage: diskStorage(this.storageOptions),
      limits: {
        fileSize: 8000000,
      },
    });
  }
  init() {
    const init = this.upload.fields([
      { maxCount: 1, name: "image" },
      { maxCount: 1, name: "video" },
    ]);
    return init;
  }
}
