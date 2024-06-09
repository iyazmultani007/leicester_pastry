"use client";

import AddButton from "@/components/AddButton/AddButton";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumbs";
import Table from "@/components/Table/Table";
import Link from "next/link";
import { db } from "@/utils/firebase.config";
import {
  collection,
  endBefore,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

import { debounce } from "lodash";
import SearchInput from "@/components/SearchInput/SearchInput";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function ProductType() {
  const [data, setData] = useState([]);
  const [lastItem, setLastItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchLastItem, setSearchLastItem] = useState(null);
  const [searchTotalPages, setSearchTotalPages] = useState(1);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);

  const col = collection(db, "productType");

  const handleChange = (e) => {
    setSearchData([]);
    setSearchQuery(e.target.value);
  };

  const fetchData = async (isNext = true) => {
    setSearchData([]);
    setSearchLastItem(null);
    setSearchCurrentPage(1);
    setLoading(true);
    try {
      const q = query(
        col,
        orderBy("productType"),
        lastItem
          ? isNext
            ? startAfter(lastItem)
            : endBefore(lastItem)
          : limit(pageSize),
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

      setData([...data, ...newData]);
      setLastItem(newLastItem);
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

    if (searchQuery) {
      try {
        const q = query(
          col,
          where("productType", ">=", searchQuery),
          where("productType", "<=", searchQuery + "\uf8ff"),
          orderBy("productType"),
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

        // const ids = new Set(searchData.map((item) => item.id));
        // const mergedData = [...searchData];

        // newData.forEach((item) => {
        //   if (!ids.has(item.id)) {
        //     ids.add(item.id);
        //     mergedData.push(item);
        //   }
        // });

        setSearchData([...searchData, ...newData]);
        setSearchLastItem(newLastItem);
        setSearchTotalPages(newTotalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleLoadMore = () => {
    if (searchQuery) {
      fetchDataSearch();
      setSearchCurrentPage(searchCurrentPage + 1);
    } else {
      fetchData();
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchDataSearch();
    } else {
      fetchData();
    }
  }, [searchQuery, pageSize]);

  return (
    <ProtectedRoute>
      <Breadcrumb pageName="Product Type" />

      <div className="">
        <div className="md:flex md:justify-between">
          <SearchInput handleChange={handleChange} />
          <AddButton
            title="Add Product Type"
            link="/dashboard/productType/add"
          />
        </div>

        <Table
          type="productType"
          data={data}
          setData={setData}
          currentPage={currentPage}
          totalPages={totalPages}
          loading={loading}
          fetchData={fetchData}
          handleLoadMore={handleLoadMore}
          searchData={searchData}
          setSearchData={setSearchData}
          searchCurrentPage={searchCurrentPage}
          searchTotalPages={searchTotalPages}
          setPageSize={setPageSize}
        />
      </div>
    </ ProtectedRoute>
  );
}

export default ProductType;
