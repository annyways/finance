<template lang="html">
  <section :class="$style.content">
    <ul :class="$style.channels">
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70" alt="">
        <p>我的资产</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            查看全部资产
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
        <p>我的优惠券</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            查看全部
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90" alt="">
        <p>我的金币</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            赚金币兑好物
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90" alt="">
        <p>我的金条</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            查看额度
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70" alt="">
        <p>我的借钱</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            查看全部产品
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70" alt="">
        <p>我的白条</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            去提额
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/18738/31/15049/5408/5cadb703E039f2599/e92ce5b31d8b1ecf.png?width=70&height=70" alt="">
        <p>兑换优惠券</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            去兑换
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70" alt="">
        <p>我的保障</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            全方位保障
          </router-link>
        </i>
      </li>
      <li :class="$style.channel">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70" alt="">
        <p>我的爱车</p>
        <i :class="$style.tip">
          <router-link :to="{ name: '', params: {} }">
            绑车享专属福利
          </router-link>
        </i>
      </li>
      <li :class="[$style.martop]">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70" alt="">
        <p>实名认证</p>
        <i>
          <router-link :to="{ name: '', params: {} }">
            已实名
          </router-link>
        </i>
      </li>
      <li :class="[$style.channel,$style.martop]">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70" alt="">
        <p>帮助中心</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
.content{
  margin: 20px 0 100px 0;
  .channels{
    li{
      height: 100px;
      line-height: 100px;
      background: #fff;
      padding: 0 40px;
      vertical-align: middle;
      border-bottom: 1px solid #e5e5e5;  /*px*/

      img{
        width:40px;
        height: 40px;
        float: left;
        margin: 35px 10px 0 0;
      }
      p{
        font-size: 28px;
        display: inline-block;
      }
      i{
        float: right;
        font-size: 24px;
        a{
          text-decoration: none;
          color: #999;
        }
        &.tip a{
          color: #FF801A;
        }
      }

    }

    .martop{
      margin-top: 20px;
      border-top: 1px solid #e5e5e5;  /*px*/
    }
  }
}
</style>
