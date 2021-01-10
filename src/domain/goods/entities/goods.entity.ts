export interface GoodsInf {
  id: number
  name: string
  price: string
  status: number
  activityType: number
  description: string
  brandName: string
  mainPicUrl: string
  tags: any[]
}

// 展示在列表中的tags Type
const OUT_STACK_STATUS = 2 // 商品缺货satatus
const DISCOUNT_ACTIVITY_TYPE = 3 // 商品折扣活动type
const SHOW_IN_LIST_TAG_TYPE = 2
export class GoodsEntity implements GoodsInf {
  id: number
  name: string
  price: string
  status: number
  activityType: number
  description: string
  brandName: string
  mainPicUrl: string
  tags: any[]

  constructor(goods: GoodsInf) {
    this.id = goods.id
    this.name = goods.name
    this.price = goods.price
    this.status = goods.status
    this.activityType = goods.activityType
    this.description = goods.description
    this.brandName = goods.brandName
    this.mainPicUrl = goods.mainPicUrl
    this.tags = goods.tags
  }

  isOutStock(): boolean {
    return this.status === OUT_STACK_STATUS
  }

  isDiscountGoods(): boolean {
    return this.activityType === DISCOUNT_ACTIVITY_TYPE
  }

  getShowInListTags(): any[] {
    return this.tags.filter((v) => v.type === SHOW_IN_LIST_TAG_TYPE)
  }
}
