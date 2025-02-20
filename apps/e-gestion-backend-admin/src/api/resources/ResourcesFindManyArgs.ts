import { ResourcesWhereInput } from "./ResourcesWhereInput";
import { ResourcesOrderByInput } from "./ResourcesOrderByInput";

export type ResourcesFindManyArgs = {
  where?: ResourcesWhereInput;
  orderBy?: Array<ResourcesOrderByInput>;
  skip?: number;
  take?: number;
};
