import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const EventAnalytics = ({ pastevent }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.analyticsHeader}>Event Analytics</Text>
      {renderAnalyticsItem('Sold Tickets:', pastevent.soldTickets, 'darkred')}
      {renderAnalyticsItem('Available Tickets:', pastevent.alltickets, 'green')}
      {renderAnalyticsItem('Expected Crowd:', pastevent.expectedCrowd, 'royalblue')}
      {renderAnalyticsItem('Expected Budget:', `$${pastevent.expectedBudget}`, 'royalblue')}
      {renderAnalyticsItem('Total Budget:', `$${pastevent.totalBudget}`, 'royalblue')}
      {renderAnalyticsItem('Participated Crowd:', pastevent.participatedCrowd, 'darkgreen')}
    </View>
  );
};

const renderAnalyticsItem = (label, value, color, description) => (
  <View style={{ ...styles.analyticsItem, borderColor: color }}>
    <Text style={{ ...styles.analyticsLabel, color: color }}>{label}</Text>
    <Text style={{ ...styles.analyticsValue, color: color }}>{value}</Text>
    <Text style={styles.analyticsDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: height * 0.05,
    flex: 1,
  },
  analyticsHeader: {
    fontFamily: 'DMMedium',
    fontSize: 26,
    letterSpacing: 3,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  analyticsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 5,
    padding: 8,
  },
  analyticsLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'DMRegular',
  },
  analyticsValue: {
    fontSize: 16,
    fontFamily: 'DMMedium',
  },
  analyticsDescription: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
});

export default EventAnalytics;
