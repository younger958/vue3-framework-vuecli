export interface QipanRow {
    /** 棋盘行内的每一列 */
    qipanCol: QipanCol[]
    /** 棋盘行的y坐标-第几行 */
    yIndex: number
}
export interface QipanCol {
    /** 当前行 */
    yIndex: number
    /** 当前列 */
    xIndex: number
    /** 当前棋子类型 */
    type: "empty" | 'black' | 'white'
}