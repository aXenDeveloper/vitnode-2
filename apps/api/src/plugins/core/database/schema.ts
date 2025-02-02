import * as groups from './schema/groups';
import * as languages from './schema/languages';
import * as users from './schema/users';

export default {
  ...groups,
  ...languages,
  ...users,
};
