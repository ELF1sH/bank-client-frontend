import React from 'react';
import { Tag, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import Button from '../../components/ui/atoms/button/Button';
import BackIcon from '../../components/ui/atoms/icons/BackIcon';
import { IEmployee } from '../../domain/entities/users/employee';
import { getJobPosition } from '../../utils/enumMappers';

const { Text } = Typography;

export interface EmployeePageViewProps {
  employee: IEmployee;
  blockUser: (id: string) => void;
  backToEmployeesList: () => void;
}

const EmployeePageView: React.FC<EmployeePageViewProps> = ({
  employee,
  blockUser,
  backToEmployeesList,
}) => (
  <>
    <PageHeader header={`Employee '${employee.lastName} ${employee.firstName} ${employee.middleName}'`}>
      <Button icon={<BackIcon />} onClick={backToEmployeesList}>Back to the employees list</Button>

      {
        !employee.isBlocked && <Button danger type="primary" onClick={() => blockUser(employee.id)}>Block employee</Button>
      }
    </PageHeader>

    {
      employee.isBlocked && <Tag style={{ marginBottom: '20px' }} color="red">BLOCKED</Tag>
    }

    <Paragraph>
      <Text strong>First name:</Text>
      &nbsp;
      {employee.firstName}
    </Paragraph>
    <Paragraph>
      <Text strong>last name:</Text>
      &nbsp;
      {employee.lastName}
    </Paragraph>
    <Paragraph>
      <Text strong>Middle name:</Text>
      &nbsp;
      {employee.middleName}
    </Paragraph>
    <Paragraph>
      <Text strong>Job position:</Text>
      &nbsp;
      {getJobPosition(employee.jobPosition)}
    </Paragraph>
  </>
);

export default EmployeePageView;
