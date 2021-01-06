import React from 'react';

import { Box, Icon, Text } from '@components';
import { useAnalytics } from '@hooks';
import { IExternalLink } from '@types';
import { openLink } from '@utils';

export const ExternalLink = ({ item }: { item: IExternalLink }) => {
  const { track } = useAnalytics();

  const handleClick = () => {
    openLink(item.link);
    track({ name: 'Link clicked', params: { url: item.link } });
  };

  return (
    <Box variant="rowAlign" onClick={handleClick} my="10px">
      <Icon type={item.icon} width="20px" />
      <Text ml="15px" color="BLUE_DARK_SLATE" fontSize="12px" mb={0}>
        {item.title}
      </Text>
    </Box>
  );
};
