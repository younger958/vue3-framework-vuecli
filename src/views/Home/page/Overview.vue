<template>
  <div class="about">
    <div class="qipan">
      <div class="row" v-for="rowItem in qipan" :key="rowItem.yIndex">
        <div
          class="col"
          v-for="(colItem, colIndex) in rowItem.qipanCol"
          :key="colIndex"
          @click="pushTask(colItem)"
        >
          <div
            class="qizi"
            :style="{
              backgroundColor: { black: 'black', white: 'red', empty: '' }[
                colItem.type
              ],
              color: 'white',
              textAlign: 'center',
            }"
          >
            ({{ colItem.xIndex }},{{ colItem.yIndex }})
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" >
// import { login } from "@/api/login/login";
import { QipanCol, QipanRow } from "@/ts/qipan";
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({
      currentColor: "black" as "black" | "white",
      qipan: [] as QipanRow[],
      rowLength: 10,
      colLength: 10,
      task: [],
    });

    const pushTask = (item: QipanCol) => {
      const type = data.qipan[item.yIndex].qipanCol[item.xIndex].type;
      if (type === "empty") {
        data.qipan[item.yIndex].qipanCol[item.xIndex].type = data.currentColor;
      }
      // 先查找边界
      const direction = getBorder(item);
      checkWin(direction);
      // 没有赢家，继续修改下一步棋的颜色
      data.currentColor = data.currentColor === "black" ? "white" : "black";
    };
    const checkWin = (direction: { [key: string]: number[] }) => {
      // 先查找边界
      // const direction = getBorder(item);
      const winObj = {
        verticalWin: false,
        horizontalWin: false,
        diagonal1Win: false,
        diagonal2Win: false,
      };
      for (const key in direction) {
        if (Object.prototype.hasOwnProperty.call(direction, key)) {
          const element = direction[key];
          switch (key) {
            case "vertical":
              winObj.verticalWin = computedVertical(element);
              break;
            case "horizontal":
              winObj.horizontalWin = computedHorizontal(element);
              break;
            case "diagonal1":
              winObj.diagonal1Win = computedDiagonal1(element);
              break;
            case "diagonal2":
              winObj.diagonal2Win = computedDiagonal2(element);
              break;
            default:
              break;
          }
        }
      }
      if (Object.values(winObj).some(_ => _)) {
        console.log("赢麻了！");
        ElMessage({
          type: "success",
          message: `当前赢家：${data.currentColor}`,
        });
      }
    };
    /**计算边界*/
    const getBorder = (item: QipanCol) => {
      const obj = {
        /** 横向起点 */
        vertical: [0, item.yIndex],
        /** 竖向起点 */
        horizontal: [item.xIndex, 0],
        /** 主对角线起点（\） */
        diagonal1: [0, 0],
        /** 副对角线起点(/) */
        diagonal2: [0, 0],
      } as {
        [key: string]: number[];
      };
      if (item.xIndex >= item.yIndex) {
        // 主对角线 边界
        obj.diagonal1[0] = item.xIndex - item.yIndex;
      } else {
        obj.diagonal1[1] = item.yIndex - item.xIndex;
      }
      // 计算副对角线
      if (item.yIndex + item.xIndex <= data.colLength - 1) {
        obj.diagonal2[1] = item.yIndex + item.xIndex;
      } else {
        obj.diagonal2[0] = item.yIndex + item.xIndex - (data.colLength - 1);
        obj.diagonal2[1] = data.colLength - 1;
      }
      return obj;
    };
    /** 计算横向 */
    const computedVertical = (direction: number[]) => {
      const itemRow = data.qipan[direction[1]].qipanCol;
      let num = 0;
      for (let i = 0; i < itemRow.length; i++) {
        if (itemRow[i].type === data.currentColor) {
          num++;
        } else {
          num = 0;
        }
        if (num === 5) {
          break;
        }
      }
      return num === 5;
    };
    /** 计算竖向 */
    const computedHorizontal = (direction: number[]) => {
      let num = 0;
      for (let i = 0; i < data.qipan.length; i++) {
        const element = data.qipan[i];
        if (element.qipanCol[direction[0]].type === data.currentColor) {
          num++;
        } else {
          num = 0;
        }
        if (num === 5) {
          break;
        }
      }
      return num === 5;
    };
    /** 计算主斜线（\） */
    const computedDiagonal1 = (direction: number[]) => {
      // 从x开始循环
      // 起始坐标
      // 0,2
      // 4,0
      const [dx, dy] = direction;
      let num = 0;
      let tempx = dx;
      for (let y = dy; y < data.qipan.length; y++) {
        const element = data.qipan[y];
        if (element.qipanCol[tempx].type === data.currentColor) {
          num++;
        } else {
          num = 0;
        }
        if (tempx === data.colLength - 1 || num === 5) {
          break;
        }
        tempx++;
      }
      return num === 5;
    };
    /** 计算副对角线(/) */
    const computedDiagonal2 = (direction: number[]) => {
      // 0 ，7
      const [dx, dy] = direction;
      console.log(direction);

      let num = 0;
      let tempx = dx;
      for (let y = dy; y >= 0; y--) {
        const element = data.qipan[y];
        if (element.qipanCol[tempx].type === data.currentColor) {
          num++;
        } else {
          num = 0;
        }
        console.log("num", num);

        tempx++;
        if (tempx === data.colLength - 1 || num === 5) {
          break;
        }
      }
      return num === 5;
    };
    const initQiPan = () => {
      data.qipan = [];
      const tempQipan = [];
      for (let i = 0; i < data.rowLength; i++) {
        const tempCol = new Array(10)
          .fill({})
          .map(
            (item, index) =>
              ({ yIndex: i, type: "empty", xIndex: index } as QipanCol),
          );
        tempQipan.push({
          qipanCol: tempCol,
          yIndex: i,
        });
      }
      data.qipan = tempQipan;
    };
    initQiPan();
    return {
      ...toRefs(data),
      pushTask,
    };
  },
});
</script>
<style lang="less">
.qipan {
  width: 800px;
  height: 800px;
  border: 1px solid #ccc;
  .row {
    height: 10%;
    width: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    .col {
      height: 100%;
      display: inline-block;
      width: 10%;
      border: 1px solid #ccc;
      box-sizing: border-box;
      .qizi {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
