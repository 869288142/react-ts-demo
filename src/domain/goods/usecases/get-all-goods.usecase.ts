import { GoodsEntity } from '../entities/goods.entity'
import { getGoodsList } from '../repository/goods.repository'

class GoodsUsecases {
  static getGoodsList(): Promise<GoodsEntity[]> {
    return getGoodsList().then((list) => {
      return list
    })
  }
}

export default GoodsUsecases
