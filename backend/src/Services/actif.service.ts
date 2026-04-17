import { AppDataSource } from "../config/config";
import { Asset } from "../entity/asset"

const assetRepository = AppDataSource.getRepository(Asset);

export class AssetService {

    async create(asset: any) {
        const newAsset = assetRepository.create(asset);
        await assetRepository.save(newAsset);
        return newAsset;
    }

    async findAll() {
        return await assetRepository.find()
    }

    async findOne(id: number) {
        const asset = assetRepository.findOneBy({ id })
        return await assetRepository.findOneBy({ id })
    }

    async delete(id: number) {
        return await assetRepository.delete(id)
    }

    async softDelete(id: number) {
        return await assetRepository.softDelete({ id })
    }

    async update(id: number, newData: any) {
        await assetRepository.update(id, newData)
        return this.findOne(id)
    }
}
