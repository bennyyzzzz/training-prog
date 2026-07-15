function getActiveUsersReport(users) {
  const activeUsers = users.filter(u => u.status === 'active');
  
  if (activeUsers.length === 0) {
    return {
      count: 0,
      averageAge: 0,
      names: ''
    };
  }
  
  const totalAge = activeUsers.reduce((sum, u) => sum + u.age, 0);
  const avgAge = totalAge / activeUsers.length;
  
  return {
    count: activeUsers.length,
    averageAge: avgAge,
    names: activeUsers.map(u => u.name).join(', ')
  };
}