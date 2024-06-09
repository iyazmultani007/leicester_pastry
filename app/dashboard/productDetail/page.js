"use client";

import AddButton from "@/components/AddButton/AddButton";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumbs";
import SearchInput from "@/components/SearchInput/SearchInput";
import Table from "@/components/Table/Table";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase.config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  getCountFromServer,
  where,
  startAfter,
  endBefore,
  Timestamp,
} from "firebase/firestore";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function ProductDetail() {
  const [data, setData] = useState([]);
  const [lastItem, setLastItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchLastItem, setSearchLastItem] = useState(null);
  const [searchTotalPages, setSearchTotalPages] = useState(1);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);
  const [searchDisable, setSearchDisable] = useState(false);

  const handleChange = (e) => {
    setSearchData([]);
    setSearchQuery(e.target.value);
  };

  const col = collection(db, "productDetails");

  const fetchData = async () => {
    setSearchData([]);
    setSearchLastItem(null);
    setSearchCurrentPage(1);
    setLoading(true);
    try {
      const q = query(
        col,
        orderBy("data.product.productionDate", "desc"),
        lastItem ? startAfter(lastItem) : limit(pageSize),
        limit(pageSize)
      );

      const querySnapshot = await getDocs(q);
      const count = await getCountFromServer(col);

      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const newLastItem =
        querySnapshot.docs[querySnapshot.docs.length - 1] || lastItem;
      const newHasMore = querySnapshot.docs.length === pageSize; // Check if there are more documents available
      const newTotalPages = Math.ceil(count.data().count / pageSize);

      // const ids = new Set(data.map(item => item.id));
      // const mergedData = [...data];

      // newData.forEach(item => {
      //   if (!ids.has(item.id)) {
      //     ids.add(item.id);
      //     mergedData.push(item);
      //   }
      // });

      setData([...data, ...newData]);
      setLastItem(newLastItem);
      setHasMore(newHasMore);
      setTotalPages(newTotalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const fetchDataSearch = async () => {
    setData([]);
    setLastItem(null);
    setCurrentPage(1);

    let q;

    if (searchQuery !== "" && selectDate) {
      q = query(
        col,
        where("data.productType", ">=", searchQuery),
        where("data.productType", "<=", searchQuery + "\uf8ff"),
        where("data.product.productionDate", "==", selectDate),
        orderBy("data.productType"),
        searchLastItem ? startAfter(searchLastItem) : limit(pageSize),
        limit(pageSize)
      );
    } else if (searchQuery !== "") {
      q = query(
        col,
        where("data.productType", ">=", searchQuery),
        where("data.productType", "<=", searchQuery + "\uf8ff"),
        orderBy("data.productType"),
        searchLastItem ? startAfter(searchLastItem) : limit(pageSize),
        limit(pageSize)
      );
    } else if (selectDate) {
      q = query(
        col,
        where("data.product.productionDate", "==", selectDate),
        orderBy("data.product.productionDate"),
        searchLastItem ? startAfter(searchLastItem) : limit(pageSize),
        limit(pageSize)
      );
    }

    const querySnapshot = await getDocs(q);
    const count = await getCountFromServer(col);
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const newLastItem =
      querySnapshot.docs[querySnapshot.docs.length - 1] || searchLastItem;
    const newHasMore = querySnapshot.docs.length === pageSize; // Check if there are more documents available
    const newTotalPages = Math.ceil(count.data().count / pageSize);

    setSearchData([...searchData, ...newData]);
    setSearchLastItem(newLastItem);
    setHasMore(newHasMore);
    setSearchTotalPages(newTotalPages);
  };

  const handleLoadMore = () => {
    if (searchQuery || selectDate) {
      fetchDataSearch();
      setSearchCurrentPage(searchCurrentPage + 1);
    } else {
      fetchData();
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (searchQuery || selectDate) {
      fetchDataSearch();
    } else {
      fetchData();
    }
  }, [searchQuery, selectDate, pageSize]);

  return (
    <ProtectedRoute>
      <Breadcrumb pageName="Product Detail" />

      <div>
        <div className="md:flex md:justify-between gap-2">
          <SearchInput handleChange={handleChange} disable={searchDisable} />
          <div className="flex relative items-center mb-7 justify-center">
            <input
              className="w-full rounded-md border border-stroke bg-white px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
              type="date"
              onChange={(e) => {
                setSearchDisable(true);
                setSearchData([]);
                setSearchLastItem(null);
                setSearchCurrentPage(1);
                setSelectDate(e.target.value);
              }}
            />
          </div>
          <AddButton
            title="Add Product Detail"
            link="/dashboard/productDetail/add"
          />
        </div>

        <Table
          type="productDetail"
          data={data}
          setData={setData}
          currentPage={currentPage}
          totalPages={totalPages}
          loading={loading}
          handleLoadMore={handleLoadMore}
          searchData={searchData}
          setSearchData={setSearchData}
          searchCurrentPage={searchCurrentPage}
          searchTotalPages={searchTotalPages}
          setPageSize={setPageSize}
        />
      </div>
    </ProtectedRoute>
  );
}

export default ProductDetail;
