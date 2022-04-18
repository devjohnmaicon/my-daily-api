import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(
        new multer.MulterError(
          'LIMIT_UNEXPECTED_FILE',
          'Arquivo deve ser do tipo jpg ou jpeg'
        ),
        false
      );
    }

    return cb(null, true);
  },

  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() + '-' + Math.round(Math.random() * 1e9 + 10000);
      cb(
        null,
        file.fieldname + '-' + uniqueSuffix + extname(file.originalname)
      );
    },
  }),
};
