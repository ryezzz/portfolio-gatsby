export function getButtonClass(currentTab, selectedTab) {
    return currentTab === selectedTab ? "btn-selected" : "btn";
  }