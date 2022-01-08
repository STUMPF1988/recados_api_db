import { Repository } from "typeorm";
import {IRecado } from "../../../features/recado/recado";
import { DatabaseConnection } from "../connections/connection";
import { Recado } from "../entities/Recado";

export class RecadoRepository {
    private repository: Repository<Recado>;

    constructor() {
        this.repository = DatabaseConnection.getConnection().manager.getRepository(Recado);
    }

    async create(recado: IRecado) {
        const recadoEntity = this.repository.create(recado);
        await this.repository.save(recadoEntity);
    }



    async list() {
        return await this.repository.find();
    }


    async update(uid: string, descricao: string, detalhamento: string ) {
        
        const recado = await this.repository.findOne(uid);

        if(!recado){
            throw Error('O recado não existe!'); 
        }

        recado.descricao = descricao;
        recado.detalhamento = detalhamento;
        this.repository.save(recado);
    }



    async delete(uid: string) {
        
           const recado = await this.repository.findOne(uid);

        if(!recado){
            throw Error('O recado não existe!'); 
        }

        
        this.repository.remove(recado);
    }

        
        
    

    // async delete(uid: string, descricao: string, detalhamento: string ) {
        
    //     const recado = await this.repository.findOne(uid);

    //     if(!recado){
    //         throw Error('O recado não existe!'); 
    //     }

    //     recado.descricao = descricao;
    //     recado.detalhamento = detalhamento;
    //     this.repository.save(recado);
    // }
}