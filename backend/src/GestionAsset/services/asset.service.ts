import { AppDataSource } from "../../config/config";
import { Asset } from "../entitys/asset";

const assetRepository = AppDataSource.getRepository(Asset);

export class AssetService {
    async create(asset: any) {
        const newAsset = assetRepository.create(asset);
        return await assetRepository.save(newAsset);
    }

    async findAll() {
        return await assetRepository.find();
    }

    async findOne(id: number) {
        const asset = assetRepository.findOneBy({ id });
        return await assetRepository.findOneBy({ id });
    }

    async Delete(id: number) {
        return await assetRepository.softDelete({ id });
    }

    async update(id: number, newData: any) {
        await assetRepository.update(id, newData);
        return this.findOne(id);
    }
}
