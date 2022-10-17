import { Route, Switch, Redirect } from "react-router-dom";
import TasksListPage from "./tasks-list";
import TaskDetailsPage from "./task-details";

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={TasksListPage} />
      <Route exact path="/:taskId" component={TaskDetailsPage} />
      <Redirect to="/" />
    </Switch>
  );
};
