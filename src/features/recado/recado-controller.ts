import { Request, Response } from "express";
import { resourceLimits } from "worker_threads";
import { RecadoRepository } from "../../core/database/repositories/recado-repository";

export class RecadoController {
  private repository = new RecadoRepository();

  async create(req: Request, res: Response) {
    try {
      const { descricao, detalhamento } = req.body;

      const repo = new RecadoRepository();
      await repo.create({
        descricao,
        detalhamento,
      });

      return res.status(201).send({
        ok: "Recado criado!",
      });
    } catch (error) {
      res.status(500).send({
        ok: "Recado não pode ser criado!",
        error,
      });
    }
  }



  async list(req: Request, res: Response) {
    try {
      const result = await this.repository.list();

      return res.status(200).send({
        ok: "Lista de Recados!",
        data: result,
      });
    } catch (error) {
      console.log(error);

      res.status(500).send({
        ok: false,
        error,
      });
    }
  }



  async update(req: Request, res: Response) {
    try {
      const { descricao, detalhamento } = req.body;
      const { uid } = req.params;

      await this.repository.update(uid, descricao, detalhamento);

      return res.status(200).send({
        ok: "Recado alterado!",
      });
    } catch (error) {
      res.status(500).send({
        ok: "Recado não encontrado!",
        error,
      });
    }
  }



  async delete(req: Request, res: Response) {
    try {
      const { uid } = req.params;

      await this.repository.delete(uid);

      return res.status(200).send({
        ok: "Recado deletado!",
      });
    } catch (error) {
      res.status(400).send({
        ok: "Recado não encontrado!",
        error,
      });
    }
  }
}
