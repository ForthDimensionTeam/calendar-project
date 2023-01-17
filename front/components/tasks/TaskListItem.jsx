import { Button, Col, List, Row, Space, Tag, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";

const TaskListItem = ({ taskItem, onItemDelete, onItemEdit }) => {
  let query;

  if (taskItem.userTasks.length) {
    query = gql`
      mutation deleteTaskWithRelations($taskId: ID, $userTaskId: ID) {
        deleteTask(where: { id: $taskId }) {
          id
        }
        deleteUserTask(where: { id: $userTaskId }) {
          id
        }
      }
    `;
  }

  if (taskItem.teamTasks.length) {
    query = gql`
      mutation deleteTaskWithRelations($taskId: ID, $teamTaskId: ID) {
        deleteTask(where: { id: $taskId }) {
          id
        }
        deleteTeamTask(where: { id: $teamTaskId }) {
          id
        }
      }
    `;
  }

  const [deleteTaskItem, { data, loading, error }] = useMutation(query);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div style={{ padding: "20px" }}>
      <Row>
        <Col span={18}>
          <Typography.Text>
            {taskItem.title} <Space /> {taskItem.isTeam && <Tag>Team</Tag>}
          </Typography.Text>
        </Col>
        <Col span={6}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              onClick={() => {
                onItemEdit(taskItem);
              }}
              icon={<EditOutlined />}
            />
            <Button
              onClick={async () => {
                const variables = { taskId: taskItem.id };

                if (taskItem.userTasks.length) {
                  variables.userTaskId = taskItem.userTasks[0].id;
                }
                if (taskItem.teamTasks.length) {
                  variables.teamTaskId = taskItem.teamTasks[0].id;
                }

                await deleteTaskItem({ variables });
                window.location.href = "/tasks/calendar";
              }}
              style={{ marginLeft: "5px" }}
              icon={<DeleteOutlined />}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TaskListItem;
