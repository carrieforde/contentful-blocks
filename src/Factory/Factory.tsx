import React, { ReactElement } from 'react';
import { BLOCK_CONFIG } from '../constants/block-configuration';
import { Block } from '../entities/block.interface';

function Factory({
  blockName,
  blockData,
  ...props
}: Block): ReactElement | null {
  const Component: any = BLOCK_CONFIG[blockName]
    ? BLOCK_CONFIG[blockName]
    : null;

  console.log(props);

  if (Component) {
    return <Component {...{ ...blockData, ...props }} />;
  }
  return null;
}

export default Factory;
