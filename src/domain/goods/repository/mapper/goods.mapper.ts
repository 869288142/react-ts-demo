import { Mapper } from '../../../../core/base/mapper'
import { GoodsEntity } from '../../entities/goods.entity'
import { GoodsModel } from '../../entities/goods.model'

export class GoodsRepositoryMapper extends Mapper<GoodsModel, GoodsEntity> {
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
      status,
      activityType,
      desc: description,
      brand: brandName,
      mainPic: mainPicUrl,
      tag: tags,
    } as any
  }
}
