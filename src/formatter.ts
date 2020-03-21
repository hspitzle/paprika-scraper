import { parse } from 'json2csv';
import _ from 'lodash';

export default (data: any[]): string => {
  const priorityFields = [
    'name',
  ];
  const fields = priorityFields.concat(_.difference(Object.keys(data[0]), priorityFields));
  const opts = { fields };
  return parse(data, opts);
};
