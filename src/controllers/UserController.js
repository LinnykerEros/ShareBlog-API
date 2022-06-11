import { prismaClient } from "../database/prismaCliente.js";
import bcryptjs from "bcryptjs";

export class UsersController {
  async createUser(req, res) {
    try {
      const { email, password, permisson } = req.body;
      if (!email || !password) {
        return res.status(401).json({
          message: ["Por favor, informe seu email e senha!"],
        });
      }
      let user = await prismaClient.user.findUnique({
        where: {
          email,
        },
      });
      if (user) {
        return res.json({ message: "Usuário já cadastrado" });
      }

      user = await prismaClient.user.create({
        select: {
          id: true,
          email: true,
          permisson: true,
          created_at: true,
          update_at: true,
        },
        data: {
          email,
          permisson,
          password_hash: await bcryptjs.hash(password, 8),
        },
      });
      return res
        .status(201)
        .json({ message: `Usuário cadastrado com sucesso!`, user });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async findUser(req, res) {
    try {
      const { id } = req.params;
      const user = await prismaClient.user.findUnique({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          email: true,
          created_at: true,
          update_at: true,
        },
      });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async findAllUsers(req, res) {
    try {
      const users = await prismaClient.user.findMany({
        select: {
          id: true,
          email: true,
          permisson: true,
          created_at: true,
          update_at: true,
        },
      });
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          message: ["Por favor, informe seu email e senha!"],
        });
      }

      let user = prismaClient.user.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      user = await prismaClient.user.update({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          email: true,
          created_at: true,
          update_at: true,
        },
        data: {
          email,
          password_hash: await bcryptjs.hash(password, 8),
        },
      });
      return res
        .status(200)
        .json({ message: `Usuário atualizado com sucesso!`, user });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Email deste usuário está invalido!` });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await prismaClient.user.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      await prismaClient.user.delete({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
