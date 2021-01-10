import { GoodsEntity } from '../entities/goods.entity'
import { GoodsModel } from '../entities/goods.model'
import { GoodsRepositoryMapper } from './mapper/goods.mapper'

export async function getGoodsList(): Promise<GoodsEntity[]> {
  const list: GoodsModel[] = [
    {
      id: 1,
      goodsName: '红烧牛肉面',
      price: 300,
      desc: '好吃',
      status: 1,
      activityType: 0,
      brand: '康师傅',
      relatedModelId: 1,
      mainPic: '牛肉巨多',
      tag: [],
      relatedModelImg: 'www',
    },
  ]
  return list.map((item: GoodsModel) =>
    new GoodsRepositoryMapper().mapFrom(item)
  )
}
