import { Request, Response } from 'express';
import multer from 'multer';
import multerconfig from '../../../config/multerconfig';

const upload = multer(multerconfig).single('arquivo');

class PhotoController {
  constructor() {}

  async create(request: Request, response: Response) {
    return upload(request, response, (err) => {
      if (err) {
        return response.status(400).json({ error: [err.field] });
      }
      return response.send(request.file);
    });
  }
}

export default new PhotoController();
