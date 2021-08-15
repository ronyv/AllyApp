export const formatData = objectiveList => {
  let parentList = objectiveList.filter(
    objective => objective.parent_objective_id === '',
  );
  let childrenList = objectiveList.filter(
    objective => objective.parent_objective_id !== '',
  );

  let tempList = parentList;
  parentList.forEach(parent => {
    tempList = parent;
    tempList.children = childrenList.filter(
      child => child.parent_objective_id === parent.id,
    );
  });

  console.log('formatData: Formatted Objectives >> ', parentList);
  return parentList;
};
