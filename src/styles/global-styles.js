import styled from 'styled-components'

export const ROW = `
  display: flex;
  flex-direction: row;
`
export const COLUMN = `
  display: flex;
  flex-direction: column;
`
export const CENTER = `
  display: flex;
  align-items: center;
  justify-content: center;
`
export const COLUMN_CENTER = `
  ${CENTER}
  ${COLUMN}
`
export const ROW_CENTER = `
  ${CENTER}
  ${ROW}
`
export const ROW_ALIGN_CENTER__SPACE_B = `
  ${ROW}
  justify-content:space-between;
  align-items: center;
`
export const ROW_ALIGN_START__JUSTIFY_START = `
  ${ROW}
  justify-content: flex-start;
  align-items: flex-start;
`
export const COLUMN_ALIGN_START__JUSTIFY_START = `
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-start;
`
export const ROW_ALIGN_CENTER__JUSTIFY_START = `
  ${ROW}
  justify-content: flex-start;
  align-items: center;
`
export const COLUMN_ALIGN_CENTER___JUSTIFY_START = `
  ${COLUMN}
  justify-content: flex-start;
  align-items: center;
`
export const LineBreak = styled.br``

export const MAX_WIDTH_RESPONSIVENESS = `
  max-width: 1920px;
  margin: auto;
`
export const ROW_ALIGN_START__SPACE_B = `
  ${ROW}
  justify-content:space-between;
  align-items: flex-start;
`
