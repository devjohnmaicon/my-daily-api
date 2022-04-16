import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { ShopRepository } from '../app/repositories/CandidateRepository';
import { CreateShopService } from '../app/services/candidate/CreateShopService';

const candidateRouter = Router();

candidateRouter.get('/', async (request, response) => {
  const candidateRepository = getCustomRepository(ShopRepository);
  const candidate = await candidateRepository.find();

  return response.json(candidate);
});

candidateRouter.post('/', async (request, response) => {
  try {
    const { name, phone, city, profile_photo } = request.body;

    const createShop = new CreateShopService();

    const candidate = await createShop.execute({
      name,
      phone,
      city,
      profile_photo,
    });

    return response.json(candidate);
  } catch (err) {
    return response.status(400).send('error');
  }
});

export default candidateRouter;
