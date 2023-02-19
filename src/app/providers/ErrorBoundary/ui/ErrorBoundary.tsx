/* eslint-disable */
import React, {
  Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import PageError from 'widgets/PageError/ui/PageError';
import 'app/styles/index.scss';


interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
