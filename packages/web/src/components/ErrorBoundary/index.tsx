import React from 'react';
import { Typography } from '@mui/material';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  componentDidCatch(error: Error, _info: React.ErrorInfo): void {
    // Display fallback UI
    console.log(error, _info);
    this.setState({ hasError: true, error: error.message });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Typography variant='h1'>Error.</Typography>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
