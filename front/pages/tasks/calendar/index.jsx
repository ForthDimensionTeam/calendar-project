import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Button, Spin } from "antd";
import { DateTime } from "luxon";
import TasksCalendar from "../../../components/tasks/TasksCalendar";
import TaskItemModal from "../../../components/tasks/TaskItemModal";
import { useEffect } from "react";

const Calendar = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, loading, error } = useQuery(gql`
    query {
      tasks(
        where: {
          OR: {
            userTasks: { every: { user: { email: { equals: "qwe@qwe.qwe" } } } }
            teamTasks: {
              every: {
                team: {
                  users: {
                    every: { user: { email: { equals: "qwe@qwe.qwe" } } }
                  }
                }
              }
            }
          }
        }
      ) {
        id
        title
        date
        userTasks {
          id
        }
        teamTasks {
          id
        }
      }
    }
  `);

  useEffect(() => {
    if (data) {
      setTasks(data.tasks);
    }
  }, [data]);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openAddTaskModal = () => {};

  const handleSelect = (value) => {
    const selectedDate = DateTime.fromISO(value.toISOString());
    const filteredTasks = tasks.filter((task) => {
      const taskDay = DateTime.fromISO(task.date);

      if (taskDay.startOf("day").ts === selectedDate.startOf("day").ts) {
        return true;
      }

      return false;
    });
    setSelectedTasks(filteredTasks);
    showModal();
  };

  return (
    <>
      <div>
        {/* <Button onClick={openAddTaskModal}>Add new task</Button> */}
        <TasksCalendar tasks={tasks} handleSelect={handleSelect} />
        <TaskItemModal
          tasks={selectedTasks}
          title="Задача"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        />
        {/* <code>{JSON.stringify(tasks)}</code> */}
      </div>
    </>
  );
};

export default Calendar;
