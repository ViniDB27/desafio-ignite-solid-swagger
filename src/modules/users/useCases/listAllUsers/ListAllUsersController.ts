import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const userId = user_id as string;

    try {
      return response
        .status(200)
        .json(this.listAllUsersUseCase.execute({ user_id: userId }));
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };
