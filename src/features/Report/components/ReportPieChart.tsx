import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import Layout from '@Constants/Layout';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import {PieChartProps} from 'react-native-chart-kit/dist/PieChart';
import {Spacing} from '@Constants/Metrics';
import {Card} from 'react-native-paper';

interface Props
  extends Omit<
    PieChartProps,
    'width' | 'height' | 'accessor' | 'backgroundColor' | 'paddingLeft'
  > {
  width?: number;
  height?: number;
  accessor?: string;
  backgroundColor?: string;
  paddingLeft?: string;
}

const chartConfig = {
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
} as AbstractChartConfig;
const ReportPieChart = (props: Props) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <PieChart
          {...props}
          width={Layout.window.width - 50}
          height={ms(180)}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'8'}
        />
      </Card.Content>
    </Card>
  );
};

export default ReportPieChart;

const styles = ScaledSheet.create({
  container: {
    marginVertical: Spacing.v.lg,
  },
});
