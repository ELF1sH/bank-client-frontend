import { PresetColorType } from 'antd/es/_util/colors';

import { JobPosition } from '../../../domain/entities/users/employee';

export const getJobPositionColor = (jobPosition: JobPosition): PresetColorType => {
  switch (jobPosition) {
    case JobPosition.Cashier:
      return 'blue';
    case JobPosition.Manager:
      return 'lime';
    case JobPosition.Director:
      return 'orange';
    default:
      return 'geekblue-inverse';
  }
};
