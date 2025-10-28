import { useIsAccountChainalysisSanctioned } from './useIsAccountChainalysisSanctioned';
import { useIsAccountOfacSanctioned } from './useIsAccountOfacSanctioned';

export function useIsAccountSanctioned() {
  // Disabled for testing
  // const isAccountOfacSanctioned = useIsAccountOfacSanctioned();
  // const isAccountChainalysisSanctioned = useIsAccountChainalysisSanctioned();

  // return isAccountOfacSanctioned || isAccountChainalysisSanctioned;
  return false;
}
