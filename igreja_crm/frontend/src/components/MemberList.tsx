
import React, { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';

const MemberList: React.FC = () => {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    apiService.getMembers().then(setMembers);
  }, []);

  return (
    <div>
      <h1>Membros</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
                