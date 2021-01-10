// eslint-disable-next-line no-use-before-define
import React from 'react'
import GoodsItem from './components/GoodsItem/GoodsItem'

import GoodsUsecases from './domain/goods/usecases/get-all-goods.usecase'

class App extends React.Component {
  state = {
    goodsList: [], // 商品列表
  }
  componentDidMount(): void {
    // 获取商品列表
    GoodsUsecases.getGoodsList().then((list) => {
      this.setState({
        goodsList: list,
      })
    })
  }
  render(): JSX.Element {
    const { goodsList } = this.state
    return (
      <div>
        <h3>商品列表</h3>
        <div className="goods-list">
          {goodsList.map((data) => {
            return <GoodsItem goods={data} />
          })}
        </div>
      </div>
    )
  }
}

export default App
