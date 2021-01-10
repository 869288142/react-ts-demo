import { Mapper } from '../../../core/base/mapper'
import { GoodsEntity, GoodsInf } from '../entities/goods.entity'
import { GoodsModel } from '../entities/goods.model'

export class ElephantWebRepositoryMapper extends Mapper<
  GoodsEntity,
  GoodsModel
> {
  mapFrom({
    id,
    goodsName,
    price,
    status,
    activityType,
    desc,
    brand,
    relatedModelId,
    mainPic,
    tag,
    relatedModelImg,
  }: GoodsModel): GoodsEntity {
    return new GoodsEntity({
      id,
      name: goodsName,
      price: (price / 100).toFixed(2),
      status,
      activityType,
      description: desc,
      brandName: brand,
      mainPicUrl: mainPic,
      tags: tag,
    })
  }

  mapTo({
    id,
    name,
    price,
    status,
    activityType,
    description,
    brandName,
    mainPicUrl,
    tags,
  }: GoodsEntity): GoodsModel {
    return {
      id,
      goodsName: name,
      price: parseInt(price) * 100,
      status,
      activityType,
      desc: description,
      brand: brandName,
      mainPic: mainPicUrl,
      tag: tags,
    }
  }
}
