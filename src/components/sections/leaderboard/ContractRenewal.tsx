import { Paper, Typography } from '@mui/material';
import ContractRenewalsChart from './ContractRenewalChart';
import { contractrenewal } from 'data/contract-renewal';

const ContractRenewal = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>
        Contract Renewal Timeline
      </Typography>

      <ContractRenewalsChart data={contractrenewal} style={{ height: 247 }} />
    </Paper>
  );
};

export default ContractRenewal;
