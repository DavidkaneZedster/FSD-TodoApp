import { PropsWithChildren, ReactNode } from "react";
import cn from "classnames";
import { Row } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Task } from "shared/api/typicode/models";

export type TaskRowProps = PropsWithChildren<{
  data: Task;
  titleHref?: string;
  before?: ReactNode;
}>;

export const TaskRow = ({ data, before, titleHref }: TaskRowProps) => {
  const title = titleHref ? (
    <Link to={titleHref}>{data.title}</Link>
  ) : (
    data.title
  );

  return (
    <Row className={cn(styles.root, { [styles.completed]: data.completed })}>
      {before}
      {title}
    </Row>
  );
};
